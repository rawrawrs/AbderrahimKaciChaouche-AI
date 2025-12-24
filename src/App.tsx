import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import FrenchIndex from "./pages/FrenchIndex";
import FrenchContactUs from "./pages/FrenchContactUs";
import FrenchNotFound from "./pages/FrenchNotFound";
import AboutUs from "./pages/AboutUs";
import FrenchAboutUs from "./pages/FrenchAboutUs";
import Research from "./pages/Research";
import FrenchResearch from "./pages/FrenchResearch";
import SyntronResearch from "./pages/SyntronResearch";
import TrafpODCResearch from "./pages/TrafpODCResearch";
import FrenchSyntronResearch from "./pages/FrenchSyntronResearch";
import FrenchTrafpODCResearch from "./pages/FrenchTrafpODCResearch";
import AIAgents from "./pages/solutions/AIAgents";
import FrenchAIAgents from "./pages/solutions/FrenchAIAgents";
import RAG from "./pages/solutions/RAG";
import FrenchRAG from "./pages/solutions/FrenchRAG";
import DeepResearch from "./pages/solutions/DeepResearch";
import FrenchDeepResearch from "./pages/solutions/FrenchDeepResearch";
import FileProcessing from "./pages/solutions/FileProcessing";
import FrenchFileProcessing from "./pages/solutions/FrenchFileProcessing";
import CustomDeepResearch from "./pages/solutions/CustomDeepResearch";
import FrenchCustomDeepResearch from "./pages/solutions/FrenchCustomDeepResearch";
import VisionAI from "./pages/solutions/VisionAI";
import FrenchVisionAI from "./pages/solutions/FrenchVisionAI";

// Create simple login pages
const EnglishLogin = () => (
  <div className="min-h-screen bg-background flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#264653' }}>Client Login</h1>
          <p className="text-gray-600 text-sm sm:text-base">Please enter your credentials to access your account</p>
        </div>
        
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="username" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Client Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2a9d8f] focus:border-[#2a9d8f] outline-none transition text-sm sm:text-base"
              placeholder="Enter your client name"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2a9d8f] focus:border-[#2a9d8f] outline-none transition text-sm sm:text-base"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#2a9d8f] focus:ring-[#2a9d8f] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <div className="text-xs sm:text-sm">
              <a href="#" className="font-medium text-[#2a9d8f] hover:text-[#264653]">
                Forgot password?
              </a>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2a9d8f] hover:bg-[#264653] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a9d8f] transition-colors"
            >
              Sign in
            </button>
          </div>
        </form>
        
        <div className="mt-4 sm:mt-6 text-center">
          <a href="/en" className="text-[#2a9d8f] hover:text-[#264653] font-medium text-sm sm:text-base">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  </div>
);

const FrenchLogin = () => (
  <div className="min-h-screen bg-background flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#264653' }}>Connexion client</h1>
          <p className="text-gray-600 text-sm sm:text-base">Veuillez entrer vos identifiants pour accéder à votre compte</p>
        </div>
        
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="username" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Nom du client
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2a9d8f] focus:border-[#2a9d8f] outline-none transition text-sm sm:text-base"
              placeholder="Entrez votre nom de client"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2a9d8f] focus:border-[#2a9d8f] outline-none transition text-sm sm:text-base"
              placeholder="Entrez votre mot de passe"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#2a9d8f] focus:ring-[#2a9d8f] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </div>
            
            <div className="text-xs sm:text-sm">
              <a href="#" className="font-medium text-[#2a9d8f] hover:text-[#264653]">
                Mot de passe oublié ?
              </a>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2a9d8f] hover:bg-[#264653] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a9d8f] transition-colors"
            >
              Se connecter
            </button>
          </div>
        </form>
        
        <div className="mt-4 sm:mt-6 text-center">
          <a href="/fr" className="text-[#2a9d8f] hover:text-[#264653] font-medium text-sm sm:text-base">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/fr" replace />} />
          <Route path="/en" element={<Index />} />
          <Route path="/en/about" element={<AboutUs />} />
          <Route path="/en/contact" element={<ContactUs />} />
          <Route path="/en/research" element={<Research />} />
          <Route path="/en/research/syntron" element={<SyntronResearch />} />
          <Route path="/en/research/trafpodc" element={<TrafpODCResearch />} />
          {/* Redirect for shorter URLs */}
          <Route path="/en/syntrons" element={<Navigate to="/en/research/syntron" replace />} />
          <Route path="/en/trafp-odc" element={<Navigate to="/en/research/trafpodc" replace />} />
          <Route path="/en/login" element={<EnglishLogin />} />
          <Route path="/en/solutions/aiagents" element={<AIAgents />} />
          <Route path="/en/solutions/rag" element={<RAG />} />
          <Route path="/en/solutions/deepresearch" element={<DeepResearch />} />
          <Route path="/en/solutions/fileprocessing" element={<FileProcessing />} />
          <Route path="/en/solutions/customdeepresearch" element={<CustomDeepResearch />} />
          <Route path="/en/solutions/visionai" element={<VisionAI />} />
          <Route path="/fr" element={<FrenchIndex />} />
          <Route path="/fr/about" element={<FrenchAboutUs />} />
          <Route path="/fr/contact" element={<FrenchContactUs />} />
          <Route path="/fr/research" element={<FrenchResearch />} />
          <Route path="/fr/research/syntron" element={<FrenchSyntronResearch />} />
          <Route path="/fr/research/trafpodc" element={<FrenchTrafpODCResearch />} />
          {/* Redirect for shorter URLs */}
          <Route path="/fr/syntrons" element={<Navigate to="/fr/research/syntron" replace />} />
          <Route path="/fr/trafp-odc" element={<Navigate to="/fr/research/trafpodc" replace />} />
          <Route path="/fr/login" element={<FrenchLogin />} />
          <Route path="/fr/solutions/aiagents" element={<FrenchAIAgents />} />
          <Route path="/fr/solutions/rag" element={<FrenchRAG />} />
          <Route path="/fr/solutions/deepresearch" element={<FrenchDeepResearch />} />
          <Route path="/fr/solutions/fileprocessing" element={<FrenchFileProcessing />} />
          <Route path="/fr/solutions/customdeepresearch" element={<FrenchCustomDeepResearch />} />
          <Route path="/fr/solutions/visionai" element={<FrenchVisionAI />} />
          <Route path="/en/*" element={<NotFound />} />
          <Route path="/fr/*" element={<FrenchNotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
