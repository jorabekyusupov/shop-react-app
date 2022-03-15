export default function Footer() {
  return (
    <>
      <footer className="page-footer light-blue">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright JB
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
