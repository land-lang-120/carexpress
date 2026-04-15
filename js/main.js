/* CarExpress — Entry Point */

function CarExpressRoot() {
  const [onboarded, setOnboarded] = useState(() => localStorage.getItem('ce_onboarded') === '1');

  const handleDone = () => {
    localStorage.setItem('ce_onboarded', '1');
    setOnboarded(true);
  };

  if (!onboarded) return <OnboardingScreen onDone={handleDone}/>;
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CarExpressRoot />);
