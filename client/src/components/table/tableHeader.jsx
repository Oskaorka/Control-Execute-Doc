import React from "react";
import PropTypes from "prop-types";
import "./tableHeader.scss";
import { useAuth } from "../hooks/useAuth";
const TableHeader = () => {
    const { currentUser } = useAuth();
    const administrator = currentUser && currentUser.type === "admin";
    return (
        <thead className="theaderStyle">
            <tr>
                <th>наименование документа</th>
                <th>
                    № <nobr>док-та</nobr>
                </th>
                <th>дата документа</th>
                <th>пункт</th>
                <th>мероприятие</th>
                <th>доложить на имя</th>
                <th>срок исполнения</th>
                {administrator && (
                    <th>удалить</th>
                    )}
                <th>исполнитель</th>
                    {administrator && (
                        <th>редактировать</th>
                    )}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    stateBtn: PropTypes.bool
};
export default TableHeader;
