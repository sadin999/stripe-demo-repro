import { Link } from "@remix-run/react";

export default function Success() {
  return (
    <div className="container mx-auto">
      <h2>Thank you for your purchases</h2>
      <Link to="/" className="link">
        Back to the product page
      </Link>
    </div>
  );
}
