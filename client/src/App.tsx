import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Speaking from "@/pages/speaking";
import ChatPage from "@/pages/chat";
import BookPage from "@/pages/book";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/speaking" component={Speaking} />
      <Route path="/book" component={BookPage} />
      <Route path="/chat/:id" component={ChatPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Force HTTPS redirect for custom domains
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost' && !window.location.hostname.includes('.replit.dev')) {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
