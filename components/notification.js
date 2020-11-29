import Link from 'next/link';
import Container from './container';
import withPure from './hoc/pure';

export default withPure(({ href, children }) => (
  <div className="f6">
    <style jsx>
      {`
        .notification {
          display: inline-flex;
          margin-top: 20px;
          margin-left: -10px;
          margin-right: -10px;
          background: var(--accents-1);
          border: 2px solid var(--accents-2);
          border-radius: 8px;
          padding: 5px 10px 10px;
          text-align: left;
        }
        a,
        a:hover {
          color: inherit;
          font-size: 0.875rem;
        }
        :global(.highlight) {
          font-weight: bold;
          transition: color 200ms ease;
        }
        a:hover :global(.highlight) {
          color: var(--geist-success);
        }

        .new {
          background: linear-gradient(90deg, #ed6292 25%, #ed5760 87.5%);
          border-radius: 5px;
          color: #fff;
          padding: 1px 8px;
          font-weight: bold;
          font-size: 0.9em;
          display: inline-flex;
          margin-right: 5px;
          text-transform: uppercase;
        }

        .br {
          display: block;
          margin-bottom: 10px;
        }

        @media screen and (min-width: 780px) {
          .br {
            display: none;
          }

          .notification {
            padding-top: 10px;
          }
        }
      `}
    </style>
    <Container center>
      <div className="notification">
        <Link href={href}>
          <a>
            <span className="new">New</span>
            <div className="br" /> {children}
          </a>
        </Link>
      </div>
    </Container>
  </div>
));
