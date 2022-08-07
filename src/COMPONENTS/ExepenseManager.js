import React, { Component } from "react";
import '../CSS/ExpenseManager.css'

class ExepenseManager extends Component {

    state = {

        Arr:[],
        Income:[],
        Expense:[],
        CurrentBal:[],
      
        grocerry:0,
        veggies:0,
        travelling:0,
        miscallneous:0,
        incomes:0,

        expenses:0,
        currentBalance:0,

        historyshow:"none"

    }

   AddProduct = (event)=>{
    event.preventDefault();
    let item = document.getElementById('item').value;
    let amount = document.getElementById('item-amount').value;
    let Date = document.getElementById('date').value;
    let option_val = document.getElementById('select').value;
     
    if(item === '' || amount === '' || Date === '' || option_val === ''){
        alert("please fill all the details.....")
    } 
    else{



    if(option_val === ''){
        alert("select categrory");
    }
    else{
        if(option_val === 'grocery'){

            let amounts = parseInt(this.state.grocerry)+parseInt(amount);
            let expense_val =parseInt(this.state.expenses)+parseInt(amount);
            let cur_bal = parseInt(this.state.currentBalance)-amount;
  
            this.setState({
                grocerry:amounts,
                expenses:expense_val,
                currentBalance:cur_bal
            })
          
        }
        else if(option_val === 'veggies'){

            let amounts = parseInt(this.state.veggies)+parseInt(amount);
            let expense_val =parseInt(this.state.expenses)+parseInt(amount);
            let cur_bal = parseInt(this.state.currentBalance)-amount;
  
            this.setState({
                veggies:amounts,
                expenses:expense_val,
                currentBalance:cur_bal
            })

        }
        else if(option_val === 'travelling'){

            let amounts = parseInt(this.state.travelling)+parseInt(amount)
            let expense_val =parseInt(this.state.expenses)+parseInt(amount);
            let cur_bal = parseInt(this.state.currentBalance)-amount;
  
            this.setState({
                travelling:amounts,
                expenses:expense_val,
                currentBalance:cur_bal
            })

        }
            else if(option_val === 'miscllaneous'){

                let amounts = parseInt(this.state.miscallneous)+parseInt(amount)
                let expense_val =parseInt(this.state.expenses)+parseInt(amount);
                let cur_bal = parseInt(this.state.currentBalance)-amount;
    
                this.setState({
                    miscallneous:amounts,
                    expenses:expense_val,
                    currentBalance:cur_bal
                })

            }
            else{
                alert("select category");
            }
        }

        if(amount >0){
            this.setState({
                Income:[amount]
            })
        }
        else{
            this.setState({
                Expense:[amount]
            })
        }

        let arr = {'item':item,'amount':amount,'date':Date,'option':option_val}

        this.setState({
            Arr:[...this.state.Arr,arr]
        })

    }
  


   }
  
   addIncome = ()=>{
    let income_val = document.getElementById('add_income').value;
    if(income_val === ''){
        alert('please add your income')
    }
    else{

   income_val =parseInt(income_val) ;
   let cur_bal = parseInt(this.state.currentBalance)+parseInt(income_val) ;

    this.setState({
        incomes:this.state.incomes+income_val,
        currentBalance:cur_bal

    })

    

   }

}

show = ()=>{
    this.setState({
      historyshow:"block"
    })

  }

  clickevent= (event)=>{
    if(event.target.id === 'delete'){

        event.target.parentNode.parentNode.remove()
    }
    if(event.target.id === 'edit'){

     let edit_val = document.getElementById('2').innerHTML;
     console.log(edit_val);
     document.getElementById('item-amount').value = edit_val;
    }

    


  }

  render() {
    return (
      <>
        <div className="main">
            <div id="heading">
                <h1>EXPENSE MANAGER</h1>
            </div>
            <hr></hr>
            <div>
           <div style={{marginLeft:"12px"}}>
           <label id="lb-1">ADD YOUR INCOME : </label><input type='number' id="add_income" />  <button id="add_btn" onClick={this.addIncome}>ADD INCOME</button> <br></br>
            </div> 

            
            </div>
            <div className="container">

                    <div className="container-1">
                    <h2>ADD YOUR EXPENSES:</h2>
                    <div id="new-item">
                        <label style={{fontSize:"25px",fontWeight:"500"}}>Enter New Items:</label><br></br>
                        <input type='text' id="item" required/>
                    </div>

                    <div id="amount">
                        <label style={{fontSize:"25px",fontWeight:"500"}}>Enter Amount:</label><br></br>
                        <input type='number' id="item-amount" required/>

                    </div>
                    <span style={{fontSize:"26px"}}>select category:</span>
                    <select id="select">
                         <option value='0' >...Select by Category...</option>
                         <option value='grocery'>Groceries</option>
                         <option value='veggies'>veggies</option>
                         <option value='travelling'>Travelling</option>
                         <option value='miscllaneous'>Miscllaneous</option>

                    </select>
                    <span style={{fontSize:"26px"}}>select Date:</span>
                    <span ><input id="date" type='date'/></span>
                  </div>
                  <div className="container-2">
                    <h1>Your current balance: ₹ <span style={{color:"blue"}}>{this.state.currentBalance}</span></h1>
                      <br></br><br/>
                    <h2>Your total Income: ₹ <span style={{color:"green"}}>{this.state.incomes}</span></h2>
                    <h2>Your total Expense: ₹ <span style={{color:"red"}}>{this.state.expenses}</span></h2>
                  </div>
            </div>
         
          

          <div id="btn-div">
            <button id="btn" onClick={this.AddProduct}>Add</button>
          </div>

           <hr></hr>
           <br></br>
          <div className="expense-detail" style={{marginLeft:"20px"}}>
                <h1 style={{textAlign:"center"}}>-:EXPENSE DEATAILS:-</h1>
   
                <hr></hr>
                <div><h1>Groceries</h1> <h2>₹ {this.state.grocerry}</h2></div> <hr></hr>
                <div><h1>veggies</h1> <h2>₹ {this.state.veggies}</h2></div> <hr></hr>
                <div><h1>Travelling</h1> <h2>₹ {this.state.travelling}</h2></div> <hr></hr>
    
                <div> <h1>Miscllaneous</h1><h2>₹ {this.state.miscallneous}</h2></div>

          </div>
          <hr></hr>
         <h2 style={{textAlign:"center"}}> click here to see the full transaction history</h2>
          <h4 style={{textAlign:"center"}}><button onClick={this.show} style={{backgroundColor:"brown",height:"6.2vh",color:"white",fontSize:"23px",borderRadius:"6px"}}>HISTORY</button></h4>

          <div id="history" style={{display:this.state.historyshow}}>
         
            {
                   this.state.Arr.map((val)=>{
                    return(
                        <>

                            <div id="disp">
                                <div>
                                    
                                   <h2 id="1">{val.item} <span style={{color:"green"}}> *{val.option}</span></h2>
                                   <span style={{fontSize:"25px",fontWeight:"bold"}}>Price:</span><h2 id="2">{val.amount}</h2>
                                    <h2 id="3">Date: {val.date}</h2> 
                                </div>
                                <div onClick={this.clickevent} id='update-div'>
                                    <button id="delete">delete</button>
                                    <button id="edit">edit</button>
                                  
                                </div>
                                
                            </div>
                         
                        </>
                    )
                   })
                }
          
          </div>
        </div>
      </>
    );
  }
}

export default ExepenseManager;
