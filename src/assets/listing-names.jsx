// const names = ['Ali', 'Taghi', 'Naghi', 'Mojtaba', 'Asghar', 'Afsar', 'Ghanbar', 'Delbar'];

function listNames(nameArr){
  let listArr = [];
  let i = 0;
  // const l = nameArr.length();
  for (let name of nameArr){
    listArr.push(<li key={i++}>{name}</li>);
  }
  return listArr;
}
 function nameList(nameArr){
  return (
    <ul>
      {/* {nameArr.map((name, index) => (<li key={index}>{name}</li>))}     */}
      {nameArr.map(function(name, index){
        return (<li key={index}>{name}</li>)
      } )}
    </ul>
  )
  
 }



export default function listingNames() {

  const names = ['Ali', 'Taghi', 'Naghi', 'Mojtaba', 'Asghar', 'Afsar', 'Ghanbar', 'Delbar'];

  const loggedIn = true;

  return (
    <div>
      <div className="text-5xl">My App</div>
      <ul>
        {names.map((name, index) => (<li key={index}>{name}</li>))}
      </ul>
      <ul>
        {nameList(names)}
      </ul>
      <ul>
      {listNames(names)}
      </ul>
      <p style={{color: 'red'}}>{loggedIn ? <h2>you are logged in.</h2> : <h2>please log in!</h2>}</p>
      {/* if the loggedIn is false, then it is gonna show an empty string */}
      <p>{loggedIn ? <h2>Hello Member</h2> : ''}</p>
      {/* if loggedIn is true, then it will execute the second part */}
      <p>{loggedIn && <h2>I said hello!</h2>}</p>
    </div>
  )
}
