import React from 'react';

const ProjectModal = ({isVisible, onClose}:any) => {

    if (!isVisible) return null

    const handleClose = (e:any) => {
        if(e.target.id ==='wrapper')onClose();
    }
    return (
        <div className="fixed inset-0
        bg-slate-900
        bg-opacity-60
        backdrop-blur-sm
        flex
        justify-center
        items-center

        "
             id="wrapper"
             onClick={handleClose}
        >
            <div className="w-[500px] flex flex-col">
                <button className="text-blue-500 text-xl place-self-end" onClick={()=> onClose()}>X</button>
                <div className="bg-blue-400 text-xl p-10 rounded-md ">
                    미완성 모달창 테스트
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;