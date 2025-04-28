export async function fetchReport(route, dateRange, reportName) {
  console.log(
    "process.env.REACT_APP_BACKEND_SERVER_URL + route ",
    process.env.REACT_APP_BACKEND_SERVER_URL + route
  );
  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_SERVER_URL + route,
      {
        method: "POST", // Specify the request method
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        body: JSON.stringify(dateRange), // Send data in JSON format
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch PDF file");
    }

    // Convert the response to a Blob (binary large object)
    const blob = await response.blob();

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create an anchor tag to simulate file download
    const link = document.createElement("a");
    link.href = url; // Set the Blob URL as the href
    link.download = `${reportName}.pdf`; // Set the file name
    link.click(); // Trigger the download by simulating a click

    // Clean up the Blob URL to free memory
    window.URL.revokeObjectURL(url);

    // const result = await response.json();
    // console.log("Success:", result);
  } catch (error) {
    console.error("Error downloading PDF:", error.message);
  }
}
