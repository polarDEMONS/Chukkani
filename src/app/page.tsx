export default function Home() {
  const books = [
    {id:1, title:'వేయి పడగలు', author:'విశ్వనాథ సత్యనారాయణ', rating:4.7, cover:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300'},
    {id:2, title:'మల్లమ్మ', author:'చాగంటి కోటేశ్వర రావు', rating:4.8, cover:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300'},
    {id:3, title:'కందుకూరి వీరేశలింగం', author:'సంజీవరావు', rating:4.6, cover:'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300'},
  ];
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(to bottom,#1a1a2e,#16213e,#0f3460)',color:'white',fontFamily:'sans-serif'}}>
      <div style={{background:'linear-gradient(to right,#f59e0b,#f97316)',padding:'80px 20px'}}>
        <h1 style={{fontSize:'48px',fontWeight:'bold',marginBottom:'16px',textAlign:'center'}}>చుక్కని - తెలుగు పుస్తకాల ప్రపంచం</h1>
        <p style={{fontSize:'20px',textAlign:'center',opacity:0.9}}>Discover Telugu Literature - Rate, Review & Share</p>
      </div>
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'48px 20px'}}>
        <h2 style={{fontSize:'32px',fontWeight:'bold',marginBottom:'32px'}}>⭐ Featured Classics</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'32px'}}>
          {books.map(b=>(
            <div key={b.id} style={{background:'#1e293b',borderRadius:'12px',overflow:'hidden',boxShadow:'0 10px 30px rgba(0,0,0,0.3)',transition:'transform 0.3s'}}>
              <img src={b.cover} alt={b.title} style={{width:'100%',height:'320px',objectFit:'cover'}}/>
              <div style={{padding:'24px'}}>
                <h3 style={{fontSize:'20px',fontWeight:'bold',color:'#fbbf24',marginBottom:'8px'}}>{b.title}</h3>
                <p style={{color:'#cbd5e1',marginBottom:'12px'}}>{b.author}</p>
                <div style={{color:'#fbbf24'}}>★ {b.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}