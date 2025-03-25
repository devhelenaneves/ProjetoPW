import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProfessoresService from "../../services/professores.service";
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ListarProfessores() {
    let emptyPartner = {
        name: "",
        description: "",
        client: "",
        client2: "",
    };

    const [partners, setPartners] = useState(null);
    const [partnerDialog, setPartnerDialog] = useState(false);
    const [partner, setPartner] = useState(emptyPartner);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const navigate = useNavigate();
    const location = useLocation();

    const getProfessores = () => {
        ProfessoresService.getProfessores().then((data) => setPartners(data.data));
    }

    // Atualiza a URL com os parâmetros da página atual
    const updateURLWithPage = (page, rows) => {
        const params = new URLSearchParams(location.search);
        params.set('page', page + 1); // page começa em 0, então adicionamos 1 para a URL
        params.set('rows', rows);
        navigate({ search: params.toString() });
    };

    // Função chamada ao mudar de página
    const onPageChange = (event) => {
        setCurrentPage(event.page);
        setRowsPerPage(event.rows);
        updateURLWithPage(event.page, event.rows);
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pageFromURL = parseInt(params.get('page'), 10) || 1; // Padrão é 1 se não houver parâmetro
        const rowsFromURL = parseInt(params.get('rows'), 10) || 10;

        setCurrentPage(pageFromURL - 1); // pageFromURL começa em 1 na URL, mas em 0 na tabela
        setRowsPerPage(rowsFromURL);
        getProfessores();
    }, [location.search]);


    const header = (
        <div className="header-container">
            <div className="header-left">
                <h4 className="m-0">Buscar Professores</h4>
                <div className="search-container">
                    <span className="p-input-icon-left">
                        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
                    </span>
                </div>
            </div>
        </div>
    );
 
    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <DataTable
                    header={header}
                    globalFilter={globalFilter}
                    ref={dt}
                    value={partners}
                    dataKey="id"
                    paginator
                    first={currentPage * rowsPerPage}
                    rows={rowsPerPage}
                    onPage={onPageChange}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="{first} ao {last} de {totalRecords} Professores">
                    <Column field="album_id" header="ID do Professor" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="title" header="Nome do Professor" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="release_date" header="Ingressou em" sortable style={{ minWidth: '10rem' }}></Column>
                    
                </DataTable>
            </div>

        </div>
    );
}