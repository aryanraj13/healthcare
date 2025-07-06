import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.contactMethod) {
      return new Response(
        JSON.stringify({ message: "Missing required fields." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(); 

    const result = await db.collection("contacts").insertOne({
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      message: body.message || "",
      contactTime: body.contactTime || "",
      contactMethod: body.contactMethod,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "Success", id: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting contact:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
