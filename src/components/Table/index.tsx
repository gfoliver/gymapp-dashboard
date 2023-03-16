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
        <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
                <thead>
                    <tr>
                        {columns.map(column => (
                            <td key={column.key} className="p-4 text-white bg-white bg-opacity-10">{column.label}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columns.map(column => (
                                <td key={column.key} className="p-4 text-white">
                                    {(column.customRendered && column.render) ? column.render() : row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;