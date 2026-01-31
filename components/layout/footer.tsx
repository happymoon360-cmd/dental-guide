import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto py-6 px-4 border-t border-border/40 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-3">
        <div className="flex justify-center space-x-6">
          <Link
            href="/analytics"
            className="text-xs text-blue-600 hover:text-blue-800 underline"
          >
            Analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          This website is for informational purposes only. We do not provide dental services or medical advice.
          Always consult with a qualified dental professional. We do not guarantee the accuracy or completeness of any information.
          Contact providers directly to verify services and pricing.
        </p>
      </div>
    </footer>
  );
}
