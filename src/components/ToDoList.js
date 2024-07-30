import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, checkedAll, deleteStudent, rechecked, updateStudent } from "../redux/listSlice";
import Add from "./Add";
export default function ToDoList() {
  const students = useSelector((state) => state.students.students);
  const dispacth = useDispatch();
  const [flag, setFlag] = useState("");
  const [isEdit, setIsEdit] = useState({ id: "", flag: false });
  const [text, setText] = useState("");
  console.log("render toDO list");


  const handle_add = (text) => {
    dispacth(addStudent(text));
  };
  const handle_update = (id, txt) => {
    dispacth(updateStudent({ id, name: txt }));
  };
const handle_recheck=(id)=>{
    dispacth(rechecked({id}))
}
const handle_checkAll=()=>{
    dispacth(checkedAll())
}

  const filterList = (list, flag) => {
    if (flag == "Check") {
      return list.filter((listStu) => listStu.checked);
    } else if (flag == "NoCheck") {
      return list.filter((listStu) => !listStu.checked);
    } else {
      return list;
    }
  };
  return (
    <div>
        <input type="checkbox" onChange={()=>handle_checkAll()}/> check all
      <Add handle_add={handle_add} />
      {filterList(students, flag).map((item, index) => (
        <div>
            {/* {item.checked ? <input type="checkbox" onChange={()=>handle_recheck(item.id)} checked /> : <input type="checkbox" />} */}
            <input type="checkbox"  checked={item.checked} onChange={()=>handle_recheck(item.id)}/>
                    {isEdit.id === item.id && isEdit.flag == true ? 
                        <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                            handle_update(item.id, text);
                            setText("");
                            setIsEdit({ id: "", flag: false })
                            }
                        }}
                        />
                    : 
                        <p className={item.checked?"p-name active":"p-name"} onClick={()=>handle_recheck(item.id)} onDoubleClick={(e) => {
                            setIsEdit({ id: item.id, flag: true }) 
                            setText(item.name)}}>
                        {item.name}
                        </p>
                    }

          {/* {item.name}
                        <input value={text} onChange={(e)=>setText(e.target.value) }
                            onKeyDown={(e)=>{
                                if(e.key==="Enter"){
                                    handle_update(item.id,text)
                                    setText("")
                                }
                            }}
                        /> */}
          <button onClick={() => dispacth(deleteStudent(item.id))}>
            delele
          </button>
        </div>
      ))}
      <button className="btn-success mx-1" onClick={() => setFlag("Check")}>
        filter check
      </button>
      <button className="btn-success mx-1" onClick={() => setFlag("NoCheck")}>
        filter no check
      </button>
      <button className="btn-success mx-1" onClick={() => setFlag("")}>
        Clear
      </button>
    </div>
  );
}
