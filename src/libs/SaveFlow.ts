import { create } from 'xmlbuilder2';
import * as vscode from 'vscode';
import { Flow } from 'lightning-flow-scanner-core';
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

export class SaveFlow {
  private doc: XMLBuilder;
  private xml: string;

  public async execute(flow: Flow, defaultUri: vscode.Uri) {
    await this.writeFlow(flow, defaultUri);
    return defaultUri;
  }

  private async writeFlow(flow: Flow, pathToWrite: vscode.Uri) {
    const flowXmlNamespace = 'http://soap.sforce.com/2006/04/metadata';
    this.doc = create(
      {
        encoding: 'UTF-8',
        version: '1.0',
      },
      {
        Flow: flow.xmldata,
      }
    )
      .root()
      .att('xmlns', flowXmlNamespace);
    this.xml = this.doc.end({ prettyPrint: true });
    await vscode.workspace.fs.writeFile(pathToWrite, Buffer.from(this.xml));
    return true;
  }
}
