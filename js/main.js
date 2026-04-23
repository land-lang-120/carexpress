/* CarExpress — Entry Point */

function CarExpressRoot() {
  const [onboarded, setOnboarded] = useState(() => localStorage.getItem('ce_onboarded') === '1');

  const handleDone = () => {
    localStorage.setItem('ce_onboarded', '1');
    setOnboarded(true);
  };

  // Signal au loading screen (dans index.html) qu'on a fini de mount.
  // Plus propre que le poll innerHTML toutes les 200ms.
  useEffect(() => {
    window.dispatchEvent(new Event('ce-ready'));
  }, []);

  if (!onboarded) return <OnboardingScreen onDone={handleDone}/>;
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CarExpressRoot />);
