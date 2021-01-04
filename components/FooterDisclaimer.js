import DonateButton from "./DonateButton";
import packageJson from '../package.json';

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="">Creado con <a href="https://github.com/montoulieu/link-ent" target="_blank" className="text-green-400" rel="noopener">Linktree</a>, por Pieter Montoulieu.</p>
    </div>
  );
}

export default FooterDisclaimer;
