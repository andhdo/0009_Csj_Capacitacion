
import React, { useEffect, useState } from "react";
import { fetchRoot, fetchItem } from "./api";

const SomeComponent =() => {

  const [itemData, setItemData] = useState<any>(null);
  useEffect(() => {
		
    // Fetch item data
		fetchItem(1, "example-query")
			.then((data) => setItemData(data))
			.catch((error) => console.error(error));
  }, []);

  return(
    <div>
			<h2>Item Data:</h2>
			<pre>{JSON.stringify(itemData, null, 2)}</pre>		
    </div>      
  );
}

export {SomeComponent};