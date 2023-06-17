import ElementCard from "./ElementCard"

const ElementsPanel = ({ elements }) => {

    var elementsKeys = Object.keys(elements)

    return <>
        <div className="accordion mb-4" id="elementsAccordion">
            {
                //console.log(Object.keys(elements))
                
                elementsKeys.map((key, index) => <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                { elements[key].name }
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body overflow-auto" style={{ maxHeight: "70vh" }}>
                                {
                                    (elements[key].categories).map((category, index2) => <div className="row d-flex justify-content-center" key={index2}>
                                            <div className="col-md-11 pb-2 px-0">
                                                { category.name }
                                                { category.alternateName === "" ? "" : ` (${category.alternateName})` }
                                            </div>
                                            <hr />
                                            {
                                                category.elements.map((element) => <div className="col-md-12" key={element.id} >
                                                        <ElementCard
                                                            icon={element.icon}
                                                            shortName={element.shortName}
                                                            fullName={element.fullName}
                                                            category={element.category}
                                                        />
                                                    </div>)
                                            }
                                        </div>)
                                }
                            </div>
                        </div>    
                </div>)
            }
                {// Object.keys(elements).map((key, index) => <div className="accordion-item">
                //     <h2 className="accordion-header" id="headingOne">
                //         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                //             key
                //         </button>
                //     </h2>
                //     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                //         <div className="accordion-body overflow-auto mb-2" style={{ maxHeight: "70vh" }}>
                //             <div className="row">
                //                 <div className="col-md-12 pb-2 px-0">
                //                     Instances (virtual machines)
                //                 </div>
                //                 <hr />
                //                 {
                //                     elements.map((element) => 
                //                         <div className="col-md-6" key={element.id} >
                //                             <ElementCard
                //                                 icon={element.icon}
                //                                 shortName={element.shortName}
                //                                 fullName={element.fullName}
                //                                 category={element.category}
                //                             />
                //                         </div>
                //                     )
                //                 }
                //             </div>
                //             <div className="row">
                //                 <div className="col-md-12 pb-2 px-0">
                //                 Containers
                //                 </div>
                //                 <hr />
                //                 {
                //                     elements.map((element) => 
                //                         <div className="col-md-6" key={element.id} >
                //                             <ElementCard
                //                                 icon={element.icon}
                //                                 shortName={element.shortName}
                //                                 fullName={element.fullName}
                //                                 category={element.category}
                //                             />
                //                         </div>
                //                     )
                //                 }
                //             </div>
                //             <div className="row">
                //                 <div className="col-md-12 pb-2 px-0">
                //                 Serverless
                //                 </div>
                //                 <hr />
                //                 {
                //                     elements.map((element) => 
                //                         <div className="col-md-6" key={element.id} >
                //                             <ElementCard
                //                                 icon={element.icon}
                //                                 shortName={element.shortName}
                //                                 fullName={element.fullName}
                //                                 category={element.category}
                //                             />
                //                         </div>
                //                     )
                //                 }
                //             </div>
                //             <div className="row">
                //                 <div className="col-md-12 pb-2 px-0">
                //                 Edge and Hybrid
                //                 </div>
                //                 <hr />
                //                 {
                //                     elements.map((element) => 
                //                         <div className="col-md-6" key={element.id} >
                //                             <ElementCard
                //                                 icon={element.icon}
                //                                 shortName={element.shortName}
                //                                 fullName={element.fullName}
                //                                 category={element.category}
                //                             />
                //                         </div>
                //                     )
                //                 }
                //             </div>
                //             <div className="row">
                //                 <div className="col-md-12 pb-2 px-0">
                //                 Cost & Capacity Management
                //                 </div>
                //                 <hr />
                //                 {
                //                     elements.map((element) => 
                //                         <div className="col-md-6" key={element.id} >
                //                             <ElementCard
                //                                 icon={element.icon}
                //                                 shortName={element.shortName}
                //                                 fullName={element.fullName}
                //                                 category={element.category}
                //                             />
                //                         </div>
                //                     )
                //                 }
                //             </div>
                //         </div>
                //     </div>
                // </div>  
            }     
        </div>
    </>
}

export default ElementsPanel