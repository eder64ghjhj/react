function GolPerdido() {
	return <h1>Errou!</h1>;
}

function GolFeito() {
	return <h1>Acertou!</h1>;
}

function Tentativa(props) {
  const eGoal = props.eGol;

  if (eGoal) {
    return <Golfeito/>;
  }
  return <GolPerdido/>;
}
 
export default Tentativa