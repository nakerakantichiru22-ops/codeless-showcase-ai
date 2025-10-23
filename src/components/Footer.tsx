const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Your Name. Built with Lovable AI - No code required.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed & Developed using AI-powered automation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
