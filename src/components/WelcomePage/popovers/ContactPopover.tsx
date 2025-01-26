"use client";

import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { BasePopover } from './BasePopover';

export const ContactPopover: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const email = "contact@florianlup.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const trigger = (
    <button
      type="button"
      className="h-9 px-4 rounded-full bg-neutral-800/40 hover:bg-neutral-700/60 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/25 to-transparent opacity-0 group-hover:opacity-100 
        transform -translate-x-full animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none" />
      <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-300 relative z-10">Contact</span>
    </button>
  );

  const content = (
    <div className="space-y-3 text-sm">
      <h3 className="font-medium text-neutral-100">Get in Touch</h3>
      <div className="flex items-center gap-x-3 text-neutral-300">
        <span className="flex-1">{email}</span>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-neutral-800/60 hover:bg-neutral-700/80 transition-colors"
          aria-label="Copy email address"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <BasePopover
      content={content}
      trigger={trigger}
      className="w-72"
    />
  );
}; 