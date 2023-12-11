import { json, type MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  return json({
    basic_price_id: process.env.BASIC_PRICE_ID,
    pro_price_id: process.env.PRO_PRICE_ID,
    ultra_price_id: process.env.ULTRA_PRICE_ID,
  });
};

export default function Index() {
  const { basic_price_id, pro_price_id, ultra_price_id } =
    useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold m-10">Choose Your Plan</h1>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item gap-10">
          <div className="card w-64 bg-base-100 shadow-xl m-10">
            <figure>
              <img src="/basic.png" alt="Basic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Basic!</h2>
              <p>The most basic of basic stuff</p>{" "}
              <p className="text-right w-full">$1200 per year</p>
              <div className="card-actions justify-end">
                <Form method="POST" action="buy">
                  <input type="hidden" name="priceId" value={basic_price_id} />
                  <button className="btn btn-primary bg-blue-900 text-white">
                    Purchase
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-64 bg-base-100 shadow-xl  m-10">
            <figure>
              <img src="/pro.png" alt="Pro" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pro!</h2>
              <p>Much better</p>
              <p className="text-right w-full">$6000 per year</p>
              <div className="card-actions justify-end">
                <Form method="POST" action="buy">
                  <input type="hidden" name="priceId" value={pro_price_id} />
                  <button className="btn btn-primary bg-green-900 hover:bg-green-700 text-white">
                    Purchase
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-64 bg-base-100 shadow-xl  m-10">
            <figure>
              <img src="/ultra.png" alt="Ultra" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ultra!</h2>
              <p>The best!</p>{" "}
              <p className="text-right w-full">$9000 per year</p>
              <div className="card-actions justify-end">
                <Form method="POST" action="buy">
                  <input type="hidden" name="priceId" value={ultra_price_id} />
                  <button className="btn btn-primary bg-amber-800 hover:bg-amber-600 text-white">
                    Purchase
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
