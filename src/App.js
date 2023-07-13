import './App.css'
function App() {
  const priceData = [
    {
    pack:"Free",
    price: "$0",
    users:"✔ Single user",
    storage:"✔ 5 GB Storage",
    project:"✔ Unlimited Public Storage",
    access:"✔ Community Access",
    privateProjects:"❌ Unlimited Private Projects",
    phoneSupport:"❌ Dedicated Phone Support",
    subdomain:"❌ Free Subdomain",
    monthlyStatusReport:"❌ Monthly Status Report"
    },
    {
      pack:"Plus",
      price: "$9",
      users:"✔ 5 user",
      storage:"✔ 50 GB Storage",
      project:"✔ Unlimited Public Storage",
      access:"✔ Community Access",
      privateProjects:"✔ Unlimited Private Projects",
      phoneSupport:"✔ Dedicated Phone Support",
      subdomain:"✔ Free Subdomain",
      monthlyStatusReport:"❌ Monthly Status Report"
      },{
        pack:"Pro",
        price: "$49",
        users:"✔ Unlimited user",
        storage:"✔ 150 GB Storage",
        project:"✔ Unlimited Public Storage",
        access:"✔ Community Access",
        privateProjects:"✔ Unlimited Private Projects",
        phoneSupport:"✔ Dedicated Phone Support",
        subdomain:"✔ Unlimited Free Subdomain",
        monthlyStatusReport:"✔ Monthly Status Report"
        }
  
  ]
  return (
    <div className="App">
{
  priceData.map((item,index)=>(
    <PriceCard 
    key={index}
    pack={item.pack}
    price={item.price}
    users={item.users}
    storage={item.storage}
    project={item.project}
    access={item.access}
    privateProjects={item.privateProjects}
    phoneSupport={item.phoneSupport}
    subdomain={item.subdomain}
    monthlyStatusReport={item.monthlyStatusReport} />

  ))}
    </div>
  );
}

export default App;

function PriceCard(props){
  return(
    <div className="card">
<div className="header">
  <h3>{props.pack}</h3>
  <h1>{props.price}<small>/month</small></h1>
</div>
<div className="content">
  <p>{props.users}</p>
  <p>{props.storage}</p>
  <p>{props.project}</p>
  <p>{props.access}</p>
  <p>{props.privateProjects}</p>
  <p>{props.phoneSupport}</p>
  <p>{props.subdomain}</p>
  <p>{props.monthlyStatusReport}</p>
</div>
<div className="footer" type="button">
  <button className="btn">BUTTON</button>
</div>
    </div>

  );
}
 