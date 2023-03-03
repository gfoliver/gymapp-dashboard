import React from 'react';

interface IColumn {
    label: string;
    key: string;
    customRendered?: boolean;
    render?: () => React.ReactNode;
}

interface ITable {
    columns: IColumn[],
    data: any[]
}

const Table: React.FC<ITable> = ({columns, data}) => {
    return (
        <table className="w-full border border-white border-opacity-30">
            <thead>
                <tr>
                    {columns.map(column => (
                        <td key={column.key} className="p-4 text-white bg-white bg-opacity-10 border border-white border-opacity-30">{column.label}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            <td key={column.key} className="p-4 text-white border border-white border-opacity-30">
                                {(column.customRendered && column.render) ? column.render() : row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;