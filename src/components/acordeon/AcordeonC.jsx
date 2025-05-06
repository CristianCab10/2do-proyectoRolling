import Accordion from "react-bootstrap/Accordion";

function AcordeonC() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <div className="text-success">NUESTRA MISION</div>
        </Accordion.Header>
        <Accordion.Body>
          Somos un Centro Terapéutico para niños, espacio interdisciplinario
          diseñado para brindar atención integral a menores con diversas
          necesidades de desarrollo y aprendizaje. Este tipo de centro combina
          varios enfoques terapéuticos para abordar de manera holística las
          dificultades que pueden enfrentar los niños. La fonoaudiología se
          encarga de la evaluación y tratamiento de trastornos de comunicación y
          deglución; la psicología ofrece apoyo emocional y mental, ayudando a
          los niños a manejar comportamientos y emociones; la terapia
          ocupacional se centra en el desarrollo de habilidades motoras y la
          adaptación a las actividades cotidianas; la psicopedagogía integra
          estrategias educativas para facilitar el aprendizaje; la educación
          especial proporciona recursos y metodologías adaptadas a las
          necesidades individuales; y el apoyo a la integración escolar busca
          favorecer la inclusión de niños con dificultades en entornos
          educativos regulares. Juntas, estas disciplinas fomentan el desarrollo
          integral del niño, promoviendo su bienestar y optimizando sus
          habilidades en diversos contextos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <div className="text-success"> ESPECIALIDADES TERAPEUTICAS </div>
        </Accordion.Header>
        <Accordion.Body>
          Desde una mirada integral, y partiendo de un dispositivo
          interdisciplinario, nos proponemos brindar respuesta específica a las
          necesidades de niños, jóvenes y adultos con discapacidad. Contamos con
          un equipo de profesionales con formación y experiencia en el abordaje
          de diversas patologías, quienes elaboran e implementan planes
          terapéuticos personalizados, en función de las necesidades,
          potencialidades e intereses de para cada paciente.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AcordeonC;
