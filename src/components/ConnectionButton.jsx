import React from 'react';

const ConnectionButton = ({label, form}) => {
    return (
        <>
            {!form.isSubmit ? (

                <input type="submit" className="mb-4 mt-4 w-100 btn btn-lg btn-primary" value={label} />

                ):
                (
                    !form.success?.result ? (
                    <>
                        <p className="mb-4 mt-4 w-100 btn btn-lg btn-primary disabled"><i class="fa-solid fa-xmark mx-2"></i>{label}</p>
                        <div className="d-flex align-items-center alert alert-danger row pb-0">
                            <div className="col-md-2">
                                <i  className="fa-solid fa-triangle-exclamation display-6 pb-3"></i>
                                </div>
                                <div className="col-md-10">
                                <p>{form.message}</p>
                            </div>
                        </div>
                    </>
                    ) :
                    (
                        <>
                            <p className="mt-4 mb-4 w-100 btn btn-lg btn-success"><i className={`fa fa-check mx-2`}></i>{form.message}</p>
                        </>

                    )
            )}
        </>
    );
}

export default ConnectionButton;
