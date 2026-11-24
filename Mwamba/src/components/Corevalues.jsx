

function Corevalues() {

    const values =[
        {num:"1",val:"Discipline",open:"fas fa-quote-left", i:"fas fa-shield",message:"We train learners to be self-controlled , respectful and responsible in and out of class .",close:"fas fa-quote-right"},
        {num:"2",val:"Hardwork",open:"fas fa-quote-left", i:"fas fa-briefcase",message:"We believe success comes through effort ,focus and never giving up .",close:"fas fa-quote-right"},
        {num:"3",val:"Commitment",open:"fas fa-quote-left", i:"fas fa-pen",message:"We stay committed to learning ,to duty and to one another  .",close:"fas fa-quote-right"},
        {num:"4",val:"Teamwork",open:"fas fa-quote-left", i:"fas fa-users",message:" We learn , play and grow together ,supporting each other .",close:"fas fa-quote-right"},
        {num:"5",val:"God Fearing",open:"fas fa-quote-left", i:"fas fa-hand-holding-heart",message:" We grow in faith ,good character and reverence for God .",close:"fas fa-quote-right"},
        {num:"6",val:"Commitment",open:"fas fa-quote-left", i:"fas fa-hammer",message:"  .",close:"fas fa-quote-right"},
    ]
        return (
        <div className="values">
            <br /><br />
            <h1>Core <span className="dams">Values</span></h1>
<br /><br />
            <div className="values-wrapper">
                {values.map((value)=>(
                    <div className="value-card"key={value.num}>
                        <i className={value.open}></i>
                            <h2 className="logo-card"><i className={value.i}></i></h2>
                            <h2>{value.val}</h2>  
                            <p>{value.message}</p>
                        <i className={value.close}></i>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Corevalues;