# Open access and orthopedic research

This is a script that gathered data for a (not yet written) study about open
access publishing and othopedic research.

Data was gathered from a Web of Science API and written to a TSV file.

## How to use this script

1. Install Node.js 18.x or newer.
2. Get an API Key from Clarivate for the Web of Science extended API.
3. Put your API key in `secret.json`. (Leave the surrounding quotation marks but
replace the contents of the quotation marks with your API key.)
4. Run the program and redirect STDOUT to a .tsv file:<br>
   `node lib/processingRecords.mjs | tee results.tsv`
     * With Node.js 18.x, you will get two warnings at the outset about use of
       the experimental JSON modules import and Fetch API. You can safely
       ignore those warnings. Those APIs will (probably) not be experimental in
       later versions of Node.js. So when Node.js 19.x or later is released,
       the warnings will (probably) go away.
5. Go get a cup of coffee or something. It might take a while.
6. Profit! Open that TSV file in Excel or whatever, crunch some numbers, and
   draw some conclusions!