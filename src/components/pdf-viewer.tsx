"use client";

import { Button } from "@/components/ui/button";
import { X, Download, ExternalLink } from "lucide-react";

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export default function PDFViewer({ 
  isOpen, 
  onClose, 
  pdfUrl, 
  title = "Resume Preview" 
}: PDFViewerProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[95vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200" style={{ borderBottomWidth: '1px' }}>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* PDF Preview */}
        <div className="flex-1 p-6 overflow-hidden">
          <div className="w-full h-full border border-gray-200 rounded-lg overflow-hidden" style={{ borderWidth: '1px' }}>
            <object
              data={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              type="application/pdf"
              className="w-full h-full"
              style={{ minHeight: '600px' }}
            >
              <div className="flex flex-col items-center justify-center h-full bg-gray-50 text-gray-600">
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="text-lg font-semibold mb-2">PDF Preview Not Available</h3>
                  <p className="text-sm mb-4">Your browser doesn&apos;t support PDF preview.</p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      onClick={handleDownload}
                      className="flex items-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </Button>
                    <Button
                      onClick={handleOpenInNewTab}
                      className="flex items-center space-x-2 bg-[#420084] hover:bg-[#420084]/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Open in New Tab</span>
                    </Button>
                  </div>
                </div>
              </div>
            </object>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50" style={{ borderTopWidth: '1px' }}>
          <div className="text-sm text-gray-600">
            Click the buttons below to download or open in a new tab
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={handleDownload}
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
            <Button
              onClick={handleOpenInNewTab}
              className="flex items-center space-x-2 bg-[#420084] hover:bg-[#420084]/80"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Open in New Tab</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
