import { Cite } from "@/components/ui/Cite";
import {
  CORE_GETH_DISCOVERY_GUIDE_URL,
  CORE_GETH_MIGRATE_CHECK_URL,
  CORE_GETH_MIGRATE_URL,
} from "@/lib/network-links";

/**
 * What a node still on a v1.12 release should do, said once on each page that speaks to someone
 * running a node. public/llms.txt carries the same words.
 */
export function V12MoveNote({ className }: { className: string }) {
  return (
    <>
      <p className={className}>
        Every v1.12 release ships known-vulnerable code, and one of those flaws
        was exploited against the Core-Geth v1.12 bootnodes in March 2026, so
        every node still on a v1.12 release should move to the v1.13 line.{" "}
        <Cite href={CORE_GETH_MIGRATE_URL}>The migration guide on coregeth.com</Cite>{" "}
        takes a node on v1.12.17 or later through the move one step at a time on
        each platform: its chain data carries over, and its P2P node key is
        rotated, which is required because CVE-2026-26315 leaks bits of that key.
        If a step goes wrong, the guide&rsquo;s rollback puts the v1.12 binary
        back only while the cause is found, and its last step deletes that
        binary once the node is stable.
        A v1.12 node that cannot move yet can{" "}
        <Cite href={CORE_GETH_DISCOVERY_GUIDE_URL}>
          read the peer discovery lists and bootnodes the v1.13 line ships
        </Cite>
        , a small step that closes none of the flaws the audits found in the
        v1.12 line.
      </p>
      <p className={className}>
        Neither route works for a node on a release older than v1.12.17. Those
        releases do not schedule the Spiral upgrade, so such a node left the
        Ethereum Classic network at block 19,250,000, on February 5, 2024, and
        has followed an obsolete chain since. It cannot move in place, and
        resyncing is its only way back: remove the chain database, rename the
        P2P node key and install a v1.13 release, which syncs the chain again.
        The migration guide&rsquo;s{" "}
        <Cite href={CORE_GETH_MIGRATE_CHECK_URL}>Check what your node runs</Cite>{" "}
        gives those steps.
      </p>
    </>
  );
}
