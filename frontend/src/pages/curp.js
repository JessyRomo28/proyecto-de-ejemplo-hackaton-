import { useState } from "react"

export default function Form() {
    const [data, setData] = useState({});

    const OnChange = (e) => {
        const dataD = data;
        if (e.target.name == "fem" || e.target.name == "mas") {
            dataD.genre = e.target.name == "fem" ? "mujer" : "hombre"
        }
        if (e.target.name != "fem" && e.target.name != "mas") {
            console.log("Entro aqui")
            dataD[e.target.name] = e.target.value;
        }
        setData(dataD)
        console.log(dataD)
    }

    const request = () => {
        fetch("http://localhost:4000/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).catch(err => {
            console.log("ERROROROROROR", err)
        })
    }

    return (
        <>
            <div className="container m-5">
                <h1 style={{ color: "green", textAlign: "center" }}>Obtener tu curp</h1>
                <form style={{ margin: "auto", borderRadius: "10px" }}>
                    <div class="mb-3">
                        <label>Ingresa tu nombre:</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="name" onChange={OnChange} placeholder="Nombre"></input>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label>Ingresa tu segundo nombre:</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="apepat" onChange={OnChange} placeholder="Nombre"></input>
                        </div>
                    </div>
                    <div class="form-check">
                        <p>Selecciona tu genero:</p>
                        <div className="form-check">
                            <input class="form-check-input" type="checkbox" name="mas" onChange={OnChange} id="flexCheckDefault"></input>
                            <label class="form-check-label">
                                Masculino
                            </label>
                        </div>
                        <div className="form-check">
                            <input class="form-check-input" onChange={OnChange} name="fem" type="checkbox" id="flexCheckDefault"></input>
                            <label class="form-check-label">
                                Femenino
                            </label>
                        </div>
                    </div>
                </form>
                <button onClick={request} className="btn btn-primary">Enviar</button>
            </div>
        </>
    )
}