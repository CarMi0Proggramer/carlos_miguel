export function clearFormInputs(form: HTMLFormElement) {
    for (const el of form.elements) {
        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
            el.value = "";
        }
    }
}