import { Connection } from "./connection.model"
import { Datacenter } from "./datacenter.model";

export interface Node {
    id: string;
    host: string;
    name: string;
    connection: Connection;
    datacenter: Datacenter;
}