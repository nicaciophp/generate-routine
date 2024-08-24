import * as vscode from 'vscode';
import { Routines } from './routines/Routines';

export function activate(context: vscode.ExtensionContext) {
    const routine = new Routines()
    let disposable = vscode.commands.registerCommand('generate-routine.showRoutineOptions', async () => {

        const routines = [
            { label: 'Log', description: 'log routine', insertText: routine.log() },
            { label: 'Accessor', description: 'Transformer Accessor', insertText: routine.accessor() },
            { label: 'Each', description: 'Each', insertText: routine.each() },
            { label: 'Call', description: 'Call', insertText: routine.call() },
            { label: 'Manager Integration Value', description: 'Manager Integration Value', insertText: routine.manager_integration_value() },
            { label: 'Case', description: 'Case', insertText: routine.case() },
            { label: 'Catch', description: 'Catch', insertText: routine.catch() },
            { label: 'Define', description: 'Define', insertText: routine.define() },
            { label: 'Paginator', description: 'Paginator', insertText: routine.paginator() },
            { label: 'Push', description: 'Push', insertText: routine.push() },
            { label: 'Last Execution At', description: 'Last Execution At', insertText: routine.last_execution_at() },
            { label: 'Transform Schema', description: 'Tranform Schema', insertText: routine.transform_schema() },
            { label: 'Transform Date', description: 'Transform Date', insertText: routine.transform_date() },
            { label: 'Array Schema', description: 'Array Schema', insertText: routine.array_schema() },
            { label: 'Consume', description: 'Consume', insertText: routine.consume() },
        ];

        const selectedRoutine = await vscode.window.showQuickPick(routines, {
            placeHolder: 'Select a routine to insert',
            matchOnDescription: true
        });

        if (selectedRoutine) {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const snippet = new vscode.SnippetString(selectedRoutine.insertText);
                editor.insertSnippet(snippet);
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
