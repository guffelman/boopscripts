/**
  {
    "api":1,
    "name":"Add Comma To Lines",
    "description":"Adds a comma at the end of each line",
    "author":"Garrett Uffelman (@guffelman)",
    "icon":"comma",
    "tags":"add,comma,lines,format,separator"
  }
**/

function main(state) {
    console.log('State before processing:', state);

    if (typeof state.text !== 'string') {
        throw new TypeError('Expected state.text to be a string');
    }

    // Split the text into lines
    const lines = state.text.split(/\r?\n/);
    
    // Add comma to each line, preserving any existing whitespace
    const commaLines = lines.map(line => {
        // Skip adding comma if line is empty
        if (!line.trim()) return line;
        // Remove any existing trailing comma and whitespace before adding new comma
        return line.replace(/,\s*$/, '') + ',';
    });
    
    // Join the lines back together
    state.text = commaLines.join('\n');

    console.log('State after processing:', state);
}
