//FormConnexion.js
import react,  { Component } from 'react';

class App extends Component {
  state = {
    login : null,
    mdp : null
  };
  //fonction qui permet d'écrire dans l'input
  change = e => {
    this.setState({
      //Identifie l'id puis choisie la valeur à l'intérieur de l'input
      [e.target.id]: e.target.value
    })
  }

  submit = e =>{
    //Empèche le formulaire de recharger la page
    e.preventDefault();
    //Envoyez à la bdd(this.state)
  }
  //Formulaire de connexion
  render(){
    return(
      <div>
        <form onSubmit={this.submit }>
          <label htmlFor="Login">Login :</label>
          <input type="text" id="Login" onChange={this.change}/>
          <label htmlFor="MotDePasse">Mot de passe :</label>
          <input type="text" id="MotDePasse" onChange={this.change}/>
          <button>Mot de passe oublié</button>
          <button>Se connecter</button>
        </form>
      </div>
    );
  }
}
export default App;
