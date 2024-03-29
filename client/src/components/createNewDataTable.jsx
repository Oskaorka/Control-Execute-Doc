import React, { useState, useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import { useHistory } from "react-router-dom";
import "./createNewDataTable.scss";
import { useDispatch, useSelector } from "react-redux";
import { getExecutor } from "./store/executor";
import { createDocData, getCurrentDataEdit } from "./store/docData";
import AddDataForm from "./form/addDataForm";
// import PropTypes from "prop-types";
const CreateNewDataTable = () => {
    const [data, setData] = useState({
        numberDoc: "",
        punctDoc: "",
        dateDoc: "",
        nameDoc: "",
        typeDoc: "",
        nameInitiator: "",
        periodOfExecution: "",
        executionOrder: "",
        nameExecutor: [],
        inWork: []
    });
    const executor = useSelector(getExecutor());
    const { currentUser } = useAuth();
    // const { signUpData } = useAddData();
    // const { getData } = useDocData();
    const history = useHistory();
    const dispatch = useDispatch();
    const currentEditData = useSelector(getCurrentDataEdit());
    const executorList = executor.map((q) => ({
        label: q.name,
        value: q._id
    }));
    console.log(currentEditData);
    if (currentEditData) {
        // const { numberDoc, punctDoc, dateDoc, nameDoc, typeDoc, nameInitiator, periodOfExecution, executionOrder, inWork } = currentEditData;
       const returnDate = (date) => {
            return date.split(".").reverse().join("-");
       };
    //    console.log(inWork);
        useEffect(() => {
           setData({
               ...currentEditData,
            //    numberDoc,
            //    punctDoc,
               dateDoc: returnDate(currentEditData.dateDoc),
            //    nameDoc,
            //    typeDoc,
            //    nameInitiator,
               periodOfExecution: returnDate(currentEditData.periodOfExecution),
            //    executionOrder,
               nameExecutor: executorList
            //    inWork
           });
       }, []);
    }
    console.log(data.nameExecutor);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            setError(null);
        }
    }, [error]);

    const handleChange = (target) => {
        setData((prevstate) => ({
            ...prevstate,
            [target.name]: target.value
        }));
    };
    const handleChangeForText = ({ target }) => {
        // console.log(target.value);
        setData((prevstate) => ({
            ...prevstate,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        try {
            // signUpData(newData);
            history.push(history.push(`/userlist/${currentUser._id}`));
            dispatch(createDocData(data));
            // dispatch(getDocData());
            // getData();
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }
        /*        finally {
            setData({
                punctDoc: "",
                dateDoc: "",
                nameDoc: "",
                typeDoc: "",
                nameInitiator: "",
                periodOfExecution: "",
                executionOrder: "",
                nameExecutor: [],
                inWork: []
});
        } */
    };
    const clickBack = () => {
        history.push(`/userlist/${currentUser._id}`);
    };
    // нужно будет сделать валидацию вводу (правильно , неправильно , все ли данные введены и т.д.)
    return (<AddDataForm
        handleSubmit={handleSubmit}
        handleChangeForText={handleChangeForText}
        clickBack={clickBack}
        handleChange={handleChange}
        executorList={executorList}
        nameDoc={data.nameDoc}
        numberDoc={data.numberDoc}
        punctDoc={data.punctDoc}
        dateDoc={data.dateDoc}
        nameInitiator={data.nameInitiator}
        typeDoc={data.typeDoc}
        periodOfExecution={data.periodOfExecution}
        executionOrder={data.executionOrder}
    />
        // <div className="m-4">
        //     <button className="btn btn-outline-secondary" onClick={clickBack}>
        //         назад
        //     </button>
        //     <h3 className="text-center">
        //         Вносим данные для отображения в таблице
        //     </h3>
        //     <form
        //         onSubmit={handleSubmit}
        //         className="d-flex flex-column align-items-center"
        //     >
        //         <div className="d-flex flex-row justify-content-center flex-wrap">
        //             <div className="wrapper-field wrapper-field-left">
        //                 <FormField
        //                     nameLabel={"название док-та"}
        //                     name="nameDoc"
        //                     onChange={handleChangeForText}
        //                     value={data.nameDoc}
        //                     description={"Военный совет"}
        //                     type="text"
        //                 />
        //                 <FormField
        //                     name="numberDoc"
        //                     value={data.numberDoc}
        //                     onChange={handleChangeForText}
        //                     nameLabel={"номер документа"}
        //                     description={"шт 300/500-234"}
        //                     type="text"
        //                 />
        //                 <FormField
        //                     name="punctDoc"
        //                     value={data.punctDoc}
        //                     onChange={handleChangeForText}
        //                     nameLabel={"пункт документа"}
        //                     description={"2.3.1"}
        //                     type="text"
        //                 />
        //                 <FormField
        //                     name="dateDoc"
        //                     nameLabel={"дата документа"}
        //                     value={data.dateDoc}
        //                     onChange={handleChangeForText}
        //                     description={"12.09.2021"}
        //                     type="date"
        //                 />
        //             </div>
        //             <div className="wrapper-field wrapper-field-right">
        //                 <FormField
        //                     onChange={handleChangeForText}
        //                     nameLabel={"инициатор"}
        //                     description={"Пупкин А.А."}
        //                     name="nameInitiator"
        //                     value={data.nameInitiator}
        //                     type="text"
        //                 />
        //                 <FormField
        //                     nameLabel={"вид доклада"}
        //                     name="typeDoc"
        //                     onChange={handleChangeForText}
        //                     value={data.typeDoc}
        //                     description={"пояснительная записка"}
        //                     type="text"
        //                 />
        //                 <FormField
        //                     onChange={handleChangeForText}
        //                     nameLabel={"исполнить до"}
        //                     name="periodOfExecution"
        //                     value={data.periodOfExecution}
        //                     description={"2021,31,12"}
        //                     type="date"
        //                 />
        //             </div>
        //             <MultiSelectField
        //                 options={executorList}
        //                 onChange={handleChange}
        //                 name="nameExecutor"
        //                 label="Выбрать исполнителя"
        //             />
        //         </div>
        //         <div className="input-group m-4 ">
        //             <span className="input-group-text">Описание документа</span>
        //             <textarea
        //                 onChange={handleChangeForText}
        //                 className="form-control"
        //                 aria-label="With textarea"
        //                 name="executionOrder"
        //                 value={data.executionOrder}
        //                 description={"описание задачи"}
        //             ></textarea>
        //         </div>
        //         <button className="btn btn-outline-secondary">
        //             Добавить данные в контроль
        //         </button>
        //     </form>
        // </div>
    );
};

export default CreateNewDataTable;
