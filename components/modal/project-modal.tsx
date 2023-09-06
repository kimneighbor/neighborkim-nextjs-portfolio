import React from 'react';

const ProjectModal = ({isVisible, onClose}: any) => {

    if (!isVisible) return null

    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper') onClose();
    }
    return (
        <div className="fixed inset-0
        bg-slate-900
        bg-opacity-60
        backdrop-blur-sm
        flex
        justify-center
        items-center
        transition

        "
             id="wrapper"
             onClick={handleClose}
        >
            <div className="w-[500px] flex flex-col slide-up ">
                <button className="text-slate-200 dark:text-slate-600 text-xl place-self-end"  onClick={() => onClose()}>Close X</button>
                <div className="bg-slate-200 dark:bg-slate-600 text-xl p-10 rounded-md ">
                    미완성 모달창 테스트
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;