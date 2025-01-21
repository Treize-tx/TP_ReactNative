import {Conference} from "@/model/Conference";
import {Speaker} from "@/model/Speaker";
import {Planning} from "@/model/Planning";

export const CONFERENCE_DATA: Conference = Conference.fromJsonObject(JSON.parse("{\"name\":\"Volcamp 2024\", \"from\":\"2024-10-10\", \"to\":\"2024-10-11\"}"));

export const SPEAKERS_DATA: Speaker[] = Speaker.fromJsonArray(JSON.parse("[{\"name\":\"michel\",\"description\":\"Je suis le meilleur de tous les speakers\",\"image\":\"https://picsum.photos/id/40/200/200\",\"twitter\":\"\",\"linkedin\":\"\"},{\"name\":\"Maycheul\",\"description\":\"Je suis le plus nul de tous les speakers\",\"image\":\"https://picsum.photos/id/1/200/200\",\"twitter\":\"\",\"linkedin\":\"\"}]"));

export const PLANNING_DATA: Planning[] = Planning.fromJsonArray(JSON.parse("[{\"from\":\"2024-10-10 08:00\", \"to\":\"2024-10-10 09:00\", \"talks\":[{\"name\":\"Ouverture\",\"room\":\"Auditorium\", \"format\":\"Keynote\", \"theme\":\"DISCOVERY\",\"description\":\"Ceci est le magnifique talk d'ouverture proposé par l'équipe organisatrice\",\"speakers\":[{\"name\":\"michel\",\"description\":\"Je suis le meilleur de tous les speakers, ma voix telle une magnifique mélodie va vous porter pendant mon talk !\",\"image\":\"https://picsum.photos/id/40/200/200\",\"twitter\":\"https://google.com\",\"linkedin\":\"https://google.com\"}]}]},{\"from\":\"2024-10-10 09:00\", \"to\":\"2024-10-10 09:30\", \"talks\":[{\"name\":\"Pause\", \"format\":\"Break\"}]}]"))

