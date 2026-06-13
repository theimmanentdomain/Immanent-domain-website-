export default function SubmittedPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "520px" }}>
        <div className="page-title-block">
          <span className="section-label">Membership</span>
          <h1 className="page-title">Received</h1>
        </div>
        <div className="prose-block">
          <p>Your application is in the queue. Review is not immediate.</p>
          <p>You will receive an email at the address on file if your application advances. No further action is required.</p>
          <p>Access to the member system is granted upon acceptance. Until then, public portions of the site remain available.</p>
        </div>
      </div>
    </div>
  );
}
