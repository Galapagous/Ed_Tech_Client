import { useState } from 'react';
import { CgAdd } from 'react-icons/cg';
import Button, { IButtonType } from '../../../components/atom/button/button';
import { addDocFile, getCourseDetails } from './data';
import { AiFillFilePdf } from 'react-icons/ai';
import DocPreview from './sub/docPreview';
import Modal, { ModalWidth } from '../../../components/organism/modal';
import PageNav from '../../../components/organism/breadcrum/pageNav';
import Form from '../../../components/molecule/form';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData';
import { COURSE_API, DOC_API } from '../../../api/endpoint/endpoint';
import { useMakeRequest } from '../../../hooks/useMakeRequest';

interface ICourseDetails {
  title: string;
  description: string;
  files: any[];
  createdAt: string;
}

const ViewCourse = () => {
  const [addDoc, setAddDoc] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  const { data, refetch } = useFetchData<any>(COURSE_API + `/${id}`);
  const makeRequest = useMakeRequest();

  const courseInfoData = getCourseDetails(data);
  const handleAddDoc = () => {
    setAddDoc(true);
  };

  const handleUpload = (data: any) => {
    setLoading(true);
    const payload = new FormData();
    payload.append('file', data.file[0]);
    payload.append('courseId', id as string);
    makeRequest(
      DOC_API,
      'POST',
      payload,
      () => {
        refetch();
      },
      () => {},
      () => {
        setLoading(false);
        setAddDoc(false);
      }
    );
  };

  const documents: any[] = [];

  return (
    <div className="min-h-screen bg-primary_300 text-white p-6 md:p-10">
      <PageNav
        title="Manage Your Course"
        subTitle="Upload, preview, and manage course documents"
        backLink="/dashboard/courses"
      />

      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-100">Course Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseInfoData?.map((data, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                {data?.label}
              </h3>
              <p className="text-base text-white">{data?.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Course Documents</h2>
            <p className="text-sm text-gray-300 mt-1">
              {documents.length} {documents.length === 1 ? 'document' : 'documents'} uploaded
            </p>
          </div>
          <Button
            onClick={handleAddDoc}
            text="Add Document"
            type={IButtonType.SECONDARY}
            icon={CgAdd}
          />
        </div>

        {documents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {documents.map((doc: string, index: number) => (
              <DocPreview key={index} doc={doc} setDocuments />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="bg-white/5 backdrop-blur-sm border-2 border-dashed border-white/20 rounded-lg p-12 text-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AiFillFilePdf size={40} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-300 mb-2">No documents uploaded yet</h3>
            <p className="text-sm text-gray-400 mb-6">
              Get started by uploading your first course document
            </p>
          </div>
        )}
      </div>
      <Modal
        close={() => setAddDoc(false)}
        showModal={addDoc}
        width={ModalWidth.MEDIUM}
        title="Add Document"
      >
        <Form loading={loading} elements={addDocFile} showSubmit onSubmit={handleUpload} />
      </Modal>
    </div>
  );
};

export default ViewCourse;
