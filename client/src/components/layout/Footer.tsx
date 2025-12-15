export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading font-bold text-lg mb-4">Enrique Rubio</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Helping organizations stay relevant in the age of AI through workforce transformation and strategic HR leadership.
            </p>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Enrique Rubio. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/speaking" className="hover:text-primary transition-colors">Speaking</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#booking" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hacking HR</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}