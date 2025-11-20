import { useState } from 'react';
import Button, { IButtonType } from '../../../components/atom/button/button';
import Table from '../../../components/organism/table/table';
import { courseTabledata, couseTabelHeader, createCourse } from './data';
import type { IDropdownMenu } from '../../../types';
import Modal, { ModalWidth } from '../../../components/organism/modal';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/molecule/form';
import { useMakeRequest } from '../../../hooks/useMakeRequest';
import { COURSE_API } from '../../../api/endpoint/endpoint';
import { useFetchData } from '../../../hooks/useFetchData';

const Course = () => {
  const navigate = useNavigate();
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const { data, refetch } = useFetchData<any>(COURSE_API);
  const [currentData, setCurrentData] = useState<any | null>(null);
  const makeRequest = useMakeRequest();

  const handleDeleteCourse = () => {
    setDeleteLoading(true);
    makeRequest(
      COURSE_API + `/${currentData}`,
      'DELETE',
      {},
      () => {},
      () => {},
      () => {
        setDeleteLoading(false);
        refetch();
      }
    );
  };

  const handleNavigate = () => {
    if (currentData === null) return;
    navigate(`/dashboard/courses/view/${currentData}`);
  };

  const dropdownMenu: IDropdownMenu[] = [
    { label: 'view', action: handleNavigate },
    { label: 'delete', action: handleDeleteCourse },
  ];

  const handleCreateCourse = (data: any) => {
    setLoading(true);
    makeRequest(
      COURSE_API,
      'POST',
      data,
      data => console.log(data),
      error => console.log(error),
      () => {
        setLoading(false);
        refetch();
        setViewModal(false);
      }
    );
  };
  return (
    <div className="bg-primary_300 text-white h-screen p-5">
      <h1 className="text-2xl font-semibold">Course</h1>
      <div className="my-3 flex justify-end w-full">
        <Button text="Add+" type={IButtonType.SECONDARY} onClick={() => setViewModal(true)} />
      </div>
      <div className="bg-primary_200 w-full p-5 rounded-md">
        <Table
          tableData={courseTabledata(data)}
          tableHead={couseTabelHeader}
          showAction={true}
          actionMenu={dropdownMenu}
          handleCurrent={data => setCurrentData(data)}
        />
      </div>
      <Modal close={() => setViewModal(false)} showModal={viewModal} width={ModalWidth.MEDIUM}>
        <Form loading={loading} elements={createCourse} onSubmit={handleCreateCourse} showSubmit />
      </Modal>
    </div>
  );
};

export default Course;
