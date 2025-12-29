import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Initialize analytics tracking
  useEffect(() => {
    // Analytics configuration
    const CONFIG = {
      apiUrl: 'http://localhost:8000/api/events/ingest',
      schemaId: 'portfolio_events',
      containerId: 'CAP-8E98B5B6F7D06495' // Replace with your actual container ID
    };

    // Generate session ID
    const getSessionId = () => {
      let sessionId = sessionStorage.getItem('analytics_session');
      if (!sessionId) {
        sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('analytics_session', sessionId);
      }
      return sessionId;
    };

    // Generate user ID
    const getUserId = () => {
      let userId = localStorage.getItem('analytics_user');
      if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('analytics_user', userId);
      }
      return userId;
    };

    // Track event function
    const trackEvent = (eventType: string, properties: Record<string, any> = {}) => {
      const eventData = {
        schema_id: CONFIG.schemaId,
        event_type: eventType,
        user_id: getUserId(),
        session_id: getSessionId(),
        timestamp: new Date().toISOString(),
        properties: {
          ...properties,
          tracked_at: new Date().toISOString(),
          page_url: window.location.href,
          page_path: window.location.pathname,
          container_id: CONFIG.containerId
        },
        metadata: {
          user_agent: navigator.userAgent,
          referrer: document.referrer
        }
      };

      fetch(CONFIG.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      })
        .then(response => {
          if (!response.ok) {
            console.error('Analytics tracking failed:', response.status);
          }
        })
        .catch(err => console.error('Analytics error:', err));
    };

    // Track page view on mount
    trackEvent('page_view', {
      page_title: document.title
    });

    // Track clicks
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const linkText = target.textContent?.trim() || '';
      const lowerHref = href.toLowerCase();

      if (href.startsWith('mailto:')) {
        trackEvent('email_link_click', {
          email_address: href.replace('mailto:', ''),
          link_text: linkText,
          element_id: target.id || null
        });
      } else if (href.startsWith('tel:')) {
        trackEvent('contact_number_click', {
          phone_number: href.replace('tel:', ''),
          link_text: linkText
        });
      } else if (lowerHref.includes('github.com/')) {
        const parts = href.split('github.com/')[1]?.split('/').filter(p => p);
        if (parts && parts.length >= 2) {
          trackEvent('github_project_click', {
            github_username: parts[0],
            project_name: parts[1],
            link_text: linkText,
            project_url: href
          });
        } else if (parts && parts.length === 1) {
          trackEvent('github_profile_click', {
            github_username: parts[0],
            github_url: href,
            link_text: linkText
          });
        }
      } else if (lowerHref.includes('linkedin')) {
        trackEvent('linkedin_profile_click', {
          linkedin_url: href,
          link_text: linkText
        });
      } else if (lowerHref.includes('resume.pdf') || lowerHref.includes('cv.pdf')) {
        trackEvent('resume_download_click', {
          file_name: href.split('/').pop(),
          link_text: linkText
        });
      } else if (href.startsWith('#')) {
        trackEvent('navigation_click', {
          section_name: href.substring(1),
          link_text: linkText,
          navigation_type: 'internal'
        });
      } else if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        trackEvent('external_link_click', {
          link_url: href,
          link_text: linkText
        });
      }
    };

    document.addEventListener('click', handleClick, true);
    console.log('✅ Analytics tracking initialized');

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;