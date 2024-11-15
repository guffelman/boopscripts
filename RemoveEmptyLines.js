/**
  {
    "api":1,
    "name":"Remove Empty Lines",
    "description":"Removes all empty or whitespace-only lines from text",
    "author":"Garrett Uffelman (@guffelman)",
    "icon":"delete",
    "tags":"remove,empty,lines,clean,whitespace"
  }
**/

function main(state) {
    if (typeof state.text !== 'string') {
        throw new TypeError('Expected state.text to be a string');
    }

    // Split the text into lines
    const lines = state.text.split(/\r?\n/);
    
    // Filter out empty lines or lines with only whitespace
    const nonEmptyLines = lines.filter(line => line.trim().length > 0);
    
    // Join the remaining lines back together
    state.text = nonEmptyLines.join('\n');
}
