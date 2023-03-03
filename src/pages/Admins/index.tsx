import React from 'react';
import Button from '../../components/Table/Button';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';

interface IAdmin {
    id: number;
    email: string;
    name: string;
}

const Admins: React.FC = () => {
    const [admins, setAdmins] = React.useState<IAdmin[]>([
        {id: 1, name: 'Admin', email: 'admin@test.com'}
    ]);

    return (
        <div className='flex flex-col flex-grow'>
            <Header />
            <div className="grid flex-grow grid-cols-app">
                <Sidebar />
                <div className="flex-grow p-8">
                    <h1 className="mb-6 text-2xl text-white">Admins</h1>
                    <Table
                        columns={[
                            {key: 'id', label: 'ID'},
                            {key: 'name', label: 'Name'},
                            {key: 'email', label: 'E-mail'},
                            {key: 'actions', label: 'Actions', customRendered: true, render: () => (
                                <>
                                    <Button
                                        text="View"
                                        onClick={() => {}}
                                    />
                                    <Button
                                        text="Edit"
                                        onClick={() => {}}
                                    />
                                    <Button
                                        text="Delete"
                                        onClick={() => {}}
                                    />
                                </>
                            )}
                        ]}
                        data={admins}
                    />
                </div>
            </div>
        </div>
    );
}

export default Admins;