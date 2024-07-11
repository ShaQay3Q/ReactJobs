const names = ['Ali', 'Taghi', 'Naghi', 'Mojtaba', 'Asghar', 'Afsar', 'Ghanbar', 'Delbar'];

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
      {nameArr.map((name, index) => (<li key={index}>{name}</li>))}    
    </ul>
  )
  
 }



export default function listingNames() {
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
    </div>
  )
}
